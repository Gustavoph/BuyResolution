import {
  Text,
  Flex,
  Input,
  InputGroup,
  InputProps,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'

import { ReactElement, forwardRef } from 'react'

interface InputBaseProps extends InputProps {
  error?: string
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

export function InputComponent(
  { leftIcon, rightIcon, error, ...rest }: InputBaseProps,
  ref: any,
) {
  return (
    <Flex flexDir="column" width="100%">
      <InputGroup size="lg">
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <Input
          {...rest}
          ref={ref}
          color="text.title"
          borderWidth="1px"
          borderColor="gray.800"
          errorBorderColor="red.600"
          focusBorderColor="green.500"
          _hover={{ border: 'gray.800' }}
        />

        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
      </InputGroup>

      {error && (
        <Text color="red.600" fontWeight="500" mt=".2rem">
          {error}
        </Text>
      )}
    </Flex>
  )
}

export const InputBase = forwardRef(InputComponent)
