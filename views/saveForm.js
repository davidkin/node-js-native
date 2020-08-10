const saveForm = (action, method, data) => {
    const form =
        `<form action="/${action}" method="${method}">
            <input type="hidden" name="id" value="${method === 'PUT' ? data.id : '' }" />
            <label>From: <input type="text" name="cityA" value="${method === 'PUT' ? data.cityA : '' }"></label>   
            <label>To: <input type="text" name="cityB" value="${method === 'PUT' ? data.cityB : ''}"></label>  
            <label>Distance: <input type="number" name="distance" step="0.01" value="${method === 'PUT' ? data.distance : ''}"></label>
            <button type="submit">${method !== 'PUT' ? 'Save' : 'Update'}</button>
        </form>`;
    
    return form;
}

module.exports = saveForm;
