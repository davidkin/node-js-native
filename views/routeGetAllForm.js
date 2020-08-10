const routeGetAll = (action, method) => {
    const form =
        `<form action="${action}" method="${method}">
            <button type="submit">Get Routes</button>
        </form>`;
    
    return form;
}

module.exports = routeGetAll;
