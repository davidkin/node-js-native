const routeAddForm = (action, method) => {
    const form =
        `<form action="${action}" method="${method}">
            <label>From: <input type="text" name="cityA"></label>   
            <label>To: <input type="text" name="cityB"></label>  
            <label>Distance: <input type="number" step="0.01" name="distance"></label>
            <button type="submit">Send</button>
        </form>`;
    
    
    return form;
}

module.exports = routeAddForm;
