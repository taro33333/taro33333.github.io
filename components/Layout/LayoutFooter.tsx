import Link from '../pages/util/Link'
import Section from '../pages/util/Section'
import { Box, Stack, Text } from '@mantine/core'
import React, { memo } from 'react'

const LayoutFooter: React.FC = memo(() => {
  return (
    <Box component="footer" py="lg">
      <Section>
        <Stack spacing="sm" align="center">
          <Text size="sm">&copy; 2023 All rights reserved by Ryotaro Seto</Text>
        </Stack>
      </Section>
    </Box>
  )
})

LayoutFooter.displayName = 'LayoutFooter'

export default LayoutFooter
