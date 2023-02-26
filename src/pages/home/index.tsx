import { Box, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
export default function () {
  return (
    <Box pt='80px'>
      <NavLink to='/batch-transfer'>
        <Button>批量转账</Button>
      </NavLink>
    </Box>
  )
}
