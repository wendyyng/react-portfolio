import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Input, Button, Box, Text, Center, VStack, HStack, Alert, AlertIcon } from '@chakra-ui/react';

function Chat() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [error, setError] = useState('');
    const chatContainerRef = useRef(null);

    const countWords = (str) => {
        return str.trim().split(/\s+/).length;
    };

    const sendMessage = async () => {
         if (!message) return; // Don't send empty messages
         console.log(message)
         if (countWords(message) > 50) {
            setError('Message cannot exceed 50 words.');
            return;
        }

        const userMessage = { role: 'user', content: message };

        setChatHistory([...chatHistory, userMessage]);
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

    useEffect(() => {
    // Scroll to the bottom whenever chatHistory changes
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    }, [chatHistory]);

    return (
        <Box p={4}>
             <Center>
                <Text fontSize="4xl" fontWeight="bold">
                    WendyQ&A
                </Text>
            </Center>
            <Box
                mt={4}
                p={4}
                mb={1}
                borderWidth="1px"
                borderRadius="md"
                h="200px" // Fixed height for the chat history container
                w='600px'
                overflowY="scroll" // Enable vertical scrolling
                ref={chatContainerRef} // Reference to the chat container
            >
                 <VStack spacing={4} mt={4}>
                {chatHistory.map((msg, index) => (
                    <HStack
                        key={index}
                        alignSelf={msg.role === 'user' ? 'flex-end' : 'flex-start'}
                        bg={msg.role === 'user' ? 'blue.100' : 'gray.100'}
                        borderRadius="md"
                        p={3}
                        maxW="70%"
                    >
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

            <Input
                variant="filled"
                placeholder="Ask something about Wendy..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button 
                mt={2} 
                onClick={sendMessage}
                color="gray.100"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="md"
                _hover={{
                bgGradient: "linear(to-r, green.200, pink.500)",
                }}
                _dark={{
                bg: "purple.700",
                }}
                >
                Send
            </Button>

        </Box>
    );
}

export default Chat;
