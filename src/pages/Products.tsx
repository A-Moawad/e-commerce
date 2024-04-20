import { Tooltip } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"

const Products = () => {
  return (
    <Tooltip label='Phone number' fontSize='md'>
  <PhoneIcon />
</Tooltip>
  )
}

export default Products