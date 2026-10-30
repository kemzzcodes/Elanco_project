function Sighting() {
    return (
        <form>
        <h2> Sighting Form</h2>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Species" />
        <input type="text" placeholder="Notes" />
        <input type="date" placeholder="Date" />
        <input type="file" accept="image/*" />
        <button type="submit">Submit</button>
        </form>
    );
}

export default Sighting;