import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  showProfileData?: boolean;
}

export const Profile: React.VFC<Props> = ({ showProfileData = true }) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Ayrton Souza</Text>
        <Text color="gray.300" fontSize="small">
          ayrtonsouza@icloud.com
        </Text>
      </Box>
    )}
    <Avatar
      size="md"
      name="Ayrton Souza"
      src="https://github.com/ayrtonbsouza.png"
    />
  </Flex>
);
