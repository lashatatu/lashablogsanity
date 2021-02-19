import {Alert} from 'react-bootstrap';

export default function PreviewAlert(){
	return (
		 <Alert variant={'secondary'}>
			this is the preview mode!{' '}
			 <Alert.Link href={'/api/exit-preview'}>leave preview mode</Alert.Link>
		 </Alert>
	)
}