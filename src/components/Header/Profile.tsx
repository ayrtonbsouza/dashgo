import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const Profile: React.VFC = () => (
  <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Ayrton Souza</Text>
      <Text color="gray.300" fontSize="small">
        ayrtonsouza@icloud.com
      </Text>
    </Box>
    <Avatar
      size="md"
      name="Ayrton Souza"
      src="https://github.com/ayrtonbsouza.png"
    />
  </Flex>
);
