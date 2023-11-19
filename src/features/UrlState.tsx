import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, RadioGroup, Text, TextField } from '@radix-ui/themes';
import { Card } from './cards/Card';
import { useSearchParams } from 'react-router-dom';

export const UrlState: React.FC = () => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const fruits = URLSearchParams.get('fruits') || 'apples';
  const searchItem = URLSearchParams.get('search') || '';

  const handleFruit = (value: `apples` | `oranges`) => {
    URLSearchParams.set('fruits', value);
    SetURLSearchParams(URLSearchParams);
  };

  const handleTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    URLSearchParams.set('search', value);
    SetURLSearchParams(URLSearchParams);
  };

  return (
    <div>
      <h2>Url State</h2>
      <Card>
        <RadioGroup.Root defaultValue={fruits} onValueChange={handleFruit}>
          <Flex gap="2" direction="column">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="apples" /> Apples
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="oranges" /> Oranges
              </Flex>
            </Text>
          </Flex>
        </RadioGroup.Root>
      </Card>
      <Card>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            value={searchItem}
            placeholder="Search the docs…"
            onChange={handleTextField}
          />
        </TextField.Root>
      </Card>
    </div>
  );
};
