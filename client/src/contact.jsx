import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />

                    <label htmlFor="myMessage"> Message </label>
                    <textarea 
                    id="myMessage" 
                    name="myMessage" 
                    required 
                    rows="5" // Adjust rows for height
                    cols="30" // Adjust cols for width
                /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>514.894.6231 </strong></i></p>
 <p>https://www.linkedin.com/in/sabra-elhajjaji/</p>
 <p>email:elh.sabra@gmail.com</p>
     </>
     );
     }
    