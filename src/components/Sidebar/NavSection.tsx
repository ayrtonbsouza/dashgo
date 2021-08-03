import { Stack, Box, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const NavSection: React.VFC<Props> = ({ title, children }) => (
  <Box>
    <Text fontWeight="bold" color="gray.400" fontSize="small">
      {title}
    </Text>
    <Stack spacing="4" mt="8" align="strecth">
      {children}
    </Stack>
  </Box>
);
