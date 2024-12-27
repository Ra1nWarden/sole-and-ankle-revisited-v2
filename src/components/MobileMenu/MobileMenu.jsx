import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import * as Dialog from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Wrapper>
          <VisuallyHidden asChild>
            <Dialog.Title>Mobile Menu</Dialog.Title>
            <Dialog.Description>Menu for navigation</Dialog.Description>
          </VisuallyHidden>
          <Dialog.Close asChild>
            <RightButton>
              <Icon id="close" strokeWidth={2} />
            </RightButton>
          </Dialog.Close>
          <nav>
            <Link href="/sale">Sale</Link>
            <Link href="/new">New&nbsp;Releases</Link>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/collections">Collections</Link>
          </nav>
          <footer>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact Us</Link>
          </footer>
        </Wrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Wrapper = styled(Dialog.Content)`
  display: flex;
  background-color: var(--color-white);
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  justify-content: space-between;
  width: 300px;
  padding: 32px;
`;

const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(96, 100, 108, 0.8);
  height: 100%;
  position: fixed;
  inset: 0;
`;

const Link = styled.a`
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  nav & {
    color: var(--color-gray-900);
    font-size: 18px;
    margin-top: 22px;
  }
  nav &:first-of-type {
    color: var(--color-secondary);
  
  }
  footer & {
    color: var(--color-gray-700);
    font-size: 14px;
    margin-top: 14px;
  }
`;

const RightButton = styled(UnstyledButton)`
  align-self: end;
`;

export default MobileMenu;
