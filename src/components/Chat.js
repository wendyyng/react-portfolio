import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Box, Text, Center } from '@chakra-ui/react';

function Chat() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const response = await axios.post('/api/chat', { message });
            setResponse(response.data.choices[0].text);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box p={4}>
             <Center>
                <Text fontSize="4xl" fontWeight="bold">
                    Chatbox
                </Text>
            </Center>
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
            {response && (
                <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
                    <Text>{response}</Text>
                </Box>
            )}
        </Box>
    );
}

export default Chat;
