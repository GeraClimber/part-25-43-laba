import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          destination: "",
          isVegan: false,
          isKosher: "",
          isLactoseFree: ""
      }
      
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? 
          this.setState({
            [name]: checked
          })
      :
      this.setState({
          [name]: value
      }) 
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                      type="text" 
                      name="firstName" 
                      onChange={this.handleChange} 
                      value={this.state.firstName} 
                      placeholder="First Name"
                    />
                    <br />
                    <input 
                      type="text" 
                      name="lastName" 
                      onChange={this.handleChange} 
                      value={this.state.lastName} 
                      placeholder="Last Name"
                    />
                    <br />
                    <input 
                      type="text"
                      name="age" 
                      value={this.state.age}
                      onChange={this.handleChange} 
                      placeholder="Age" 
                    />
                    <br />
                    
                    <label>
                      <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                      /> Male
                    </label>
                    <br />
                    <label>
                      <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                      /> Female
                    </label>
                    <br />
                    
                    <select 
                      value={this.state.destination} 
                      name="destination" 
                      onChange={this.handleChange}
                    >
                      <option value="">-- Please Choose a destination --</option>
                      <option value="germany">Germany</option>
                      <option value="norway">Norway</option>
                      <option value="north pole">North Pole</option>
                      <option value="south pole">South Pole</option>
                    </select>
                    <br />
                    
                    <label>
                      <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
                      /> Vegan?
                    </label>
                    <br />
                    <label>
                      <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
                      /> Kosher?
                    </label>
                    <br />
                    <label>
                      <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        checked={this.state.isLactoseFree}
                      /> Lactose Free?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>

                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
