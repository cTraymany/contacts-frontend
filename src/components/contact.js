const Contact = ({contact, deleteContact}) => {
    
    const showBirthday = (birthday) => {
        let newBirthday = birthday.split('-')
        let dateToFormat = new Date(newBirthday[0], newBirthday[1], newBirthday[2])
        let month = dateToFormat.toLocaleString('en-us', { month: 'short' })

        if (birthday) {
            return (
                `Birthday: ${month} ${newBirthday[1]}, ${newBirthday[0]}`
            )
        }
    }

    const showNumber = (number) => {
        if (number) {
            let parseNum = number.split('-')
            return (
                `Phone: (${parseNum[0]}) ${parseNum[1]}-${parseNum[2]}`
            )
        }
    }


        return (
            <div key={contact.id} className="contact" >
                <h5>{contact.attributes && contact.attributes.name} <small onClick={() => deleteContact(contact.attributes.group_id, parseInt(contact.id))}>☒</small></h5>
                <p>{contact.attributes && showNumber(contact.attributes.phoneNumber)}</p>
                <p>{contact.attributes && showBirthday(contact.attributes.birthday)}</p><br/>
            </div>
        )

}

export default Contact