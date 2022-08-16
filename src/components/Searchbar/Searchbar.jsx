
import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { StyledHeader, StyledForm, FormContainer, StyledInput, StyledBtn } from './Searchbar.styled';

class SearchBar extends Component {
    state = {
        imageName: '',
    } 
    
     static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onValidation: PropTypes.func.isRequired
    };

    handleImageChange= (event) => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    }  

    handleSubmit( event, callback, showMessage) {
        event.preventDefault();
        
        const { imageName } = this.state;
        if (!imageName.trim() ) return showMessage('Please fill this field');

        const isExist = callback({ imageName });

        if (!isExist) this.reset();
        
    }

    reset= ()=> {
        this.setState({ imageName: ''})
    }
    render() {
        // const { name, tel } = this.state;
        const { onSubmit, onValidation } = this.props;
        return (
        <StyledHeader >
                <StyledForm onSubmit={(event) => this.handleSubmit(event, onSubmit, onValidation)}>
                    <FormContainer>
                            <StyledBtn type="submit"  >
                            <FiSearch style={{marginRight:8}}/>
                            </StyledBtn>
                            <StyledInput
                            onChange={this.handleImageChange}
                            type="text"
                            name = 'name'
                            value={this.state.imageName}
                            autoComplete={'off'}
                            autoFocus
                            placeholder="Search images and photos"
                                    />
                    </FormContainer>
            </StyledForm>
        </StyledHeader>
        )
    }
}


export default SearchBar;

// {/* 
// <Container>
//             <Header>Phonebook</Header>
//             <FormContainer onSubmit={(event) => {this.formValidation(event, addNewContact, onNotValid)}}>
//                 <LabelContainer >
//                     Name
//                     <UserInput
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={name}
//                         onChange={this.handleChange} />
//                 </LabelContainer>

//                 <LabelContainer >
//                     Phone Number
//                     <UserInput
//                         type="tel"
//                         name="tel"
//                         pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
//                         title="Tel may contain only numbers. For example 654-59-78"
//                         required
//                         value={tel}
//                         onChange={this.handleChange} />
//                     </LabelContainer>
//                     <StyledBtn type='submit'>Add contact</StyledBtn>
//                     </FormContainer>
//                     </Container>
//                 </> */}