import React from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { Textarea, Text } from '@chakra-ui/react'

  

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: "rgba( 14, 37, 69, 0.45 )",
        }
      })
    }
  }
});
const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <div className="bg">
      <Button onClick={onOpen}>Open Modal</Button>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu risus sapien. Nullam condimentum non orci quis posuere. Maecenas lacinia, nisl sed luctus laoreet, erat ante pretium neque, a facilisis enim eros et lorem. Integer iaculis a augue vitae consequat. Proin auctor sapien nulla, id lobortis erat fermentum eu. Vivamus turpis odio, sollicitudin scelerisque commodo ac, dictum eu enim. Donec blandit orci mi, lobortis commodo diam auctor nec. Pellentesque et ipsum et ligula pretium facilisis. Praesent aliquam mi quis ipsum feugiat, et sollicitudin ante faucibus. Mauris ultrices ornare sem, auctor lacinia odio suscipit at. Proin vitae tempus ex, varius dapibus urna. Sed venenatis, arcu sit amet rutrum pretium, dui augue pulvinar velit, quis lobortis ipsum nulla eget mauris.

      Nullam sit amet neque lorem. Donec rutrum pharetra nisl, vel hendrerit nibh gravida non. Pellentesque elementum arcu at lacinia facilisis. Suspendisse metus odio, fermentum quis malesuada in, pulvinar nec odio. Vivamus sagittis ultricies feugiat. Curabitur suscipit commodo ex, at finibus quam elementum in. In vel erat vitae odio placerat varius nec et elit. Nunc molestie tortor ac ante accumsan consectetur. Maecenas laoreet massa non sem eleifend laoreet.

      Curabitur sed tortor erat. Phasellus convallis a quam id aliquam. Curabitur vestibulum velit eget sagittis viverra. Mauris laoreet tortor nec odio ornare aliquam. Proin fringilla felis quis turpis consectetur, et volutpat enim imperdiet. Vestibulum ut quam condimentum, vulputate mauris at, ultrices justo. Pellentesque at nisi rhoncus, egestas neque eu, faucibus orci. Curabitur iaculis sapien quam, eu mattis enim efficitur eu. Donec at tortor nec massa fermentum hendrerit varius id leo. Sed volutpat libero non finibus efficitur. Mauris luctus ut ante in tempus. Nunc a sodales augue, ut venenatis sapien. Fusce eget augue vel ligula mattis efficitur eget id mauris. Praesent nec libero dui.

      Duis lacinia erat massa, ac bibendum nunc pellentesque vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eleifend lectus ac urna sollicitudin facilisis. Nulla facilisi. Cras venenatis feugiat blandit. Sed blandit, neque sollicitudin consequat ullamcorper, augue justo dictum dui, id porttitor augue dui sit amet est. Curabitur id erat in nisl dictum pulvinar vitae vestibulum ante. Curabitur quis justo varius, auctor nisi id, iaculis nisl. Sed vehicula nisi eu magna dapibus, eu scelerisque lorem facilisis. Ut eu hendrerit quam. Mauris nisl massa, dapibus a ultricies vitae, tincidunt id purus. Phasellus scelerisque elit in leo pulvinar, nec ullamcorper lacus sollicitudin. Nam at euismod felis.

      Nam imperdiet arcu maximus quam consequat aliquam quis quis diam. Quisque vestibulum nisl turpis, at pharetra dui faucibus id. Vestibulum et mattis nibh. Maecenas ut sapien blandit, volutpat leo ac, tristique justo. Vivamus pharetra dui eget arcu placerat, in ullamcorper tortor euismod. Integer euismod purus porttitor congue tristique. Praesent sollicitudin, dolor bibendum vestibulum volutpat, nisi augue interdum tellus, id pellentesque neque turpis eget enim. Aenean ultricies suscipit gravida. Suspendisse aliquet, elit id faucibus fermentum, sapien metus blandit nisl, lobortis pulvinar risus est nec tellus. Fusce nec eleifend libero. Fusce scelerisque, augue id accumsan tristique, nunc magna dictum lectus, at ornare quam urna id ex. Nunc tristique, diam sit amet sagittis sagittis, urna elit egestas est, vel finibus mauris leo et sem.
      </p>
      <ChakraProvider theme={theme}>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay 
        bg='rgb(14,37,69,0.5)'
        backdropFilter='blur(1px)' />
        <ModalContent className="modal-content" variant="custom" maxH="fit-content" maxW="fit-content">
          <ModalCloseButton className="close"/>
          <ModalBody className="modal-body" pb={6}>
          <div className="column1">
            <div className='dr-info1'>
              <img src={"/doclock.png"} alt="doclock"></img>
              <p>
              <b color='rgba( 14, 37, 69)'>Claim Id</b> 200003
              <br/>
              <b color='rgba( 14, 37, 69)'>Date of Service</b> 1/10/2023
              <br/>
              <b color='rgba( 14, 37, 69)'>Status Pending</b> Pending
              </p>
            </div>
            <div className='dr-info2'>
              <div className='drpr1'>
              <img src={"/contact.png"} alt="doclock"></img>
              <p>
              <b color='rgba( 14, 37, 69)'>Linda Harris</b> 
              <br></br>
              11/09/1945(45 years), F
              <br></br>
              Non-Smoker
              <br></br>
              </p>
              </div>
              <div className="drpr">
                <p>
                  EMPI/MRN: P078645 
                  Phone: 512-265-4081 
                  PCP: Dr.Karen Carter
                </p>
              </div>
            </div>

            <div className='dr-info1'>
              <img src={"/doc.png"} alt="doclock"></img>
              <p>
              <b color='rgba( 14, 37, 69)'>Dr. Roger Lenon</b> 
              <br></br>
              MD, NPI 431212
              <br></br>
              Holtzman Medical Group
              <br></br>
              Contact No: 234585950
              </p>
            </div>

          </div>
          <div className="column2">
          <div className='dr-info'>
            <b className="heading" color='rgba( 14, 37, 69)'>Primary Payer</b>
            <p color='rgba( 14, 37, 69)'>
              VETERANS ADMINISTRATION- PRESCOTT VA 12345678 12345
              <br></br>
              EDI- 19931
              Assignment- Not Assigned
              Force to Drop- No
            </p>

          </div>
          <div className='dr-info'>
            <b className="heading" color='rgba( 14, 37, 69)'>Secondary Payer</b>
            <p color='rgba( 14, 37, 69)'>
              Humana(Medicare Replacement/Advantage-PPO) [47006] 123456789
              <br></br>
              EDI- 23456
              Assignment- Not Assigned
              Force to Drop- No
            </p>

          </div>
          <div className="text-area">
            <Text mb='8px'>Note for Provider</Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder='Text goes here...'
              size='sm'
              className="text"
            />
          </div>
          </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3}>
              Reject with Note
            </Button>
            <Button variant="brandPrimary" onClick={onClose} className="approve">Approve</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
    </div>
  );
}


export default App;
