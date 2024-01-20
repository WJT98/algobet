'use client';

import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          AlgoBet
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {'NBA stat visualization and predictions.\n'}
        Get started{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          here
        </Anchor>
        .
      </Text>
    </>
  );
}
