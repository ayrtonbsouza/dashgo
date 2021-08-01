import {
  Input as ChakraInput,
  InputProps,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

interface Props extends InputProps {
  name: string;
  label?: string;
}

export const Input: React.VFC<Props> = ({ name, label, ...rest }) => (
  <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      id={name}
      name={name}
      type="email"
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900',
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
);
