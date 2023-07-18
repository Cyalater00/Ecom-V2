// import { useState } from 'react';
// import{Form, Button } from 'react-bootstrap';
// import {useParams, useNaviagate} from 'react-router-dom'

// const SearchBox = () => {
//     const navigate = useNaviagate();
//     const {keyword: urlKeyword} = useParams();
//     const [keyword, setKeyword] = useState(urlKeyword || '');

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if(keyword.trim()){
//         navigate(`/search/${keyword}`);
//     } else {
//         navigate('/');
//     }
// }

//     return (
//         <Form onSubmit={ submitHandler } className= 'd-flex'>
//             <Form.Control
//             type='text'
//             name='q'
//             onChange={(e) => setKeyword(e.target.value)}
//             value={keyword}
//             placeholder="Search Products..." 
//             className='mr-sm-2 ml-sm-5'
//             />
//             <Button variant="outline-success" className='p-2 mx-2'>
//                 Search
//             </Button>

//         </Form>
//     )
// }

// export default SearchBox