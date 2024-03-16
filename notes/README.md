# Hello and welcome to my notes app!

---

I created this app using React in order to help me improve my developer skills.

## useRef()

This app helped me have a better understanding of the useRef() web hook. useRef can be used to directly access and manipulate
DOM elements like in this case input fields.
Refs can be a better fit for these situtaions because you dont need any state updates or re-renders after the user submits their information. This also helps with enahancing the apps performance. Which is why it wouldn't make sense to utilize useState in this example.

useRef cannot be used on custom components so you have to use forwardRef as a high-order-component(HOC). Like the name entails, this allows you to forward the ref to the custom component being rendered in the App. This high order component takes in all 'props' and a ref parameter. Then when you are rendering the component in your 'App' component you can then pass those custom properties and methods.

```javascript
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return(
        <p>
            <label>{label}</label>
            {textarea ? <textarea ref={ref} {...props} /> : <input ref={ref} {...props} />}
        </p>
    );
});

const App = () => {
    <Input ref={title} label="Title" />
    <Input ref={note} label="Note" textarea={true} />
};
```

## useState()

useState also played a big part in the development of this application. This react hook allowed me to store the note as an object and keep adding new notes being created in an array. This allowed me to add the functionality of being able to allow the user to view any specific note that they created. Then later allow the user to delete desired note.

Here is how I leveraged useState to store the note as an object.

```javascript
const App = () => {
  const [note, setNote] = useState({
    selectedNoteId: undefined,
    notes: [],
  });
};
```
