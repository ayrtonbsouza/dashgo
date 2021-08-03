import { LinkProps, Icon, Link, Text } from '@chakra-ui/react';

import { ElementType } from 'react';

interface Props extends LinkProps {
  icon: ElementType;
  children: string;
}
export const NavLink: React.VFC<Props> = ({ icon, children, ...rest }) => (
  <Link display="flex" align="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
);
