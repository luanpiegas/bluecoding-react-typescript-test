import React from 'react';
import { ListingProps} from './types'
import { Button, Modal } from 'flowbite-react';

const GifList: React.FC<ListingProps> = ({ results }) => {
  const [openModal, setOpenModal] = React.useState<string>();
  const props = { openModal, setOpenModal };

  return (
    <>
      {results.map((gif) => (
        <div key={gif.id}>
          <Button onClick={() => props.setOpenModal(gif.id)}>
            <img src={gif.images.original_still.url} alt={gif.title} className='w-32 aspect-[1/1]' />
          </Button>
          <Modal show={props.openModal === gif.id} onClose={() => props.setOpenModal(undefined)}>
            <Modal.Body>
              <img src={gif.images.original.url} alt={gif.title} className='gif' />
            </Modal.Body>
            <Modal.Footer>
              <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </>
  );
};

export default GifList;
