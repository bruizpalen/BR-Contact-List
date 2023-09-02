
const removeContact = ({id}) => {
    
    
    return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,{
    method: 'DELETE'}
    // body: data}
    )
        .then(res => {
            if (!res.ok) {
                throw Error('Request Error');
            }
            return res.json();
        })
        .then(res => {
            console.log(res)
        
            return res
                })
        .catch(err => console.log(err))
}

export default removeContact;