import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
	// ...rest vai pegar qualquer propriedade a mais que for passada no lugar em que o componente está sendo chamado
	return (
		<NativeBaseInput
			bg="gray.700"
			h={14}
			size="md"
			borderWidth={0}
			fontSize="md"
			fontFamily="body"
			color="white"
			placeholderTextColor="gray.300"
			_focus={{
				borderWidth: 1,
				borderColor: 'green.500',
				bg: 'gray.700',
			}}
			{...rest}
		/>
	);
}
