import './formQuize.scss';


const FormQuize = () => {

    
      
      
    return (
        <>
            <div className="form-card">
                <div className="input-answers">
                    <input type="text" placeholder='First name' />
                </div>
                <div className="input-answers">
                    <input type="text" placeholder='Last name' />
                </div>
            </div>
            <div className="form-card">
                <div className="input-answers">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input-answers">
                    <input type="text" placeholder='Numero de tele' />
                </div>
            </div>
            <div className="form-card">
                <div className="input-answers">
                    <input type="text" placeholder='Ville' />
                </div>
                <div className="input-answers">
                    <input type="text" placeholder='Adress et code postale' />
                </div>
            </div>
            <div className="form-card">
                <div className="input-answers">
                    <select name="" id="">
                        <option selected value="" hidden>Sexe</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-answers">
                    <input type="text" name="" id="" placeholder='birthday' className='datePicker' onFocus={(e)=>{e.target.type='date'}} onBlur={(e)=>{e.target.type='text'}} />
                </div>
            </div>
        </>
    )
}

export default FormQuize