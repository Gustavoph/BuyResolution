import {
  Input,
  InputGroup,
  InputProps,
  InputLeftElement,
  InputRightElement,
  Text,
  Flex,
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
          color="white"
          borderWidth="1px"
          borderColor="gray.900"
          errorBorderColor="red.600"
          focusBorderColor="green.500"
          _hover={{ border: 'gray.900' }}
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
