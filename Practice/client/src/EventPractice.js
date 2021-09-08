import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    message: '',
    username: '',
  })
  const { message, username } = form;
  const onChange = (e) =>{ 
    const nextForm = {
      ...form,
      [e.target.name] : e.target.value,
    }
    setForm(nextForm)

  }
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    console.log(username + ':' + message);
  //   setUsername('');
  //   setMessage('');
    setForm({ 
      message: '',
      username: '',
    })
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}> </button>
    </>
  );
};
export default EventPractice;
//클래스 형
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//     userName: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     this.setState({ message: '', userName: '' });
//   };
//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           name="userName"
//           value={this.state.userName}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}> </button>
//       </>
//     );
//   }
// }

// export default EventPractice;
