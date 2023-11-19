import { Flex, RadioGroup, Text } from '@radix-ui/themes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  Colors,
  getInitialSettingsValue,
  setBackgroundColor,
} from '../redux/settingsSlice';

export const Settings: React.FC = () => {
  const color = useAppSelector(getInitialSettingsValue);
  const dispatch = useAppDispatch();

  const handleRadio = (value: Colors) => {
    dispatch(setBackgroundColor(value));
  };

  console.log(color);
  return (
    <div>
      <h2>Settings</h2>
      <RadioGroup.Root defaultValue={color} onValueChange={handleRadio}>
        <Flex gap="2" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="light" /> Light
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="dark" /> Dark
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
    </div>
  );
};
