import {
  Box,
  Flex,
  Link,
  Spacer,
  Button,
  Heading,
  IconButton,
  useDisclosure,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <Flex bg="teal.700" p={4} color="white" align="center" justify="space-between">
        <Heading size="md">eBusia</Heading>

        {/* Desktop menu */}
        <Flex gap={6} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link key={link.name} as={RouterLink} to={link.path} _hover={{ textDecoration: "underline" }}>
              {link.name}
            </Link>
          ))}
        </Flex>

        {/* Mobile menu icon */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          aria-label="Toggle navigation"
          color="white"
          borderColor="whiteAlpha.600"
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="teal.700" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={6}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  as={RouterLink}
                  to={link.path}
                  onClick={onClose}
                  _hover={{ textDecoration: "underline" }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
