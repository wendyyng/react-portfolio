import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Input, Button, Box, Text, VStack, HStack, Alert, AlertIcon, Avatar, Flex  } from '@chakra-ui/react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const MAX_CHAR_LENGTH = 100;

function Chat() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const chatContainerRef = useRef(null);

    const sendMessage = async () => {
         if (!message) return; // Don't send empty messages
         console.log(message)
        if (message.length > MAX_CHAR_LENGTH) {
            setError(`Message cannot exceed ${MAX_CHAR_LENGTH} characters.`);
            return;
        }

        const userMessage = { role: 'user', content: message };

        setChatHistory(prevChatHistory => [...prevChatHistory, userMessage]);
        setMessage('');
        setError('');

        try {
            const result = await axios.post('http://127.0.0.1:5000/api/chat', { message }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const botResponse = { role: 'bot', content: result.data.response };
            setChatHistory([...chatHistory, userMessage, botResponse]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { role: 'bot', content: 'An error occurred. Please try again.' };
             setChatHistory(prevChatHistory => [...prevChatHistory, userMessage, errorMessage]);
        }
    };

    const handleClose = () => {
        setIsOpen(false); // Close the chatbox
    };

    useEffect(() => {
    // Scroll to the bottom whenever chatHistory changes
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    }, [chatHistory]);

    if (!isOpen) {
        return null; // Render nothing if chatbox is closed
    }

    return (
         <Box
            p={4}
            position="fixed"
            bottom={4}
            right={4}
            borderRadius="xl"
            boxShadow="md"
            bg="white"
            zIndex={10}
        >
           <Box ml={2} >
                <FaTimes size={20} color="#CBD5E0" cursor="pointer" onClick={handleClose}/>
            </Box>
            <Box
                mt={4}
                p={4}
                mb={1}
                borderRadius="xl"
                h="200px"
                w='600px'
                overflowY="scroll" // Enable vertical scrolling
                ref={chatContainerRef} // Reference to the chat container
                border="1px solid #CBD5E0"
            >
                <VStack spacing={4} mt={4}>
                    {chatHistory.map((msg, index) => (
                       <HStack
                            key={index}
                            alignSelf={msg.role === 'user' ? 'flex-end' : 'flex-start'}
                            bg={msg.role === 'user' ? 'blue.100' : 'pink.100'}
                            borderRadius="md"
                            p={3}
                            maxW="70%"
                        >
                            {msg.role === 'bot' && <Avatar icon={<FaRobot />} size="sm" mr={2} />}
                            <Text>{msg.content}</Text>
                        </HStack>
                    ))}
                </VStack>
            </Box>
            {error && (
                <Alert status="error" mt={2}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            <Flex align="center">
                <Input
                    variant="filled"
                    placeholder="Ask something about Wendy..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={MAX_CHAR_LENGTH}
                    borderRadius="xl"
                />
                <Button
                    color="gray.100"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    px={3}
                    py={3}
                    fontWeight="semibold"
                    rounded="full"
                    _hover={{
                        bgGradient: "linear(to-r, pink.400, purple.400)",
                    }}
                    _dark={{
                        bg: "purple.700",
                    }}
                    onClick={sendMessage}
                >
                    <FaPaperPlane size={20} />
                </Button>
            </Flex>
        </Box>
    );
}

export default Chat;
