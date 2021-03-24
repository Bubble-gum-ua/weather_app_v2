import React from "react";
import {Button, Input} from "@material-ui/core";
import {useFormik} from "formik";
import {getCityData} from "../../Redux/CardReducer";
import {useDispatch} from "react-redux";

export const SearchItem = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            if (localStorage.length === 0) {
                localStorage.setItem("name", JSON.stringify([]))
            }
            if (localStorage.length > 0) {
                let d = JSON.parse(localStorage.getItem("name"))
                for (let i = 0; i <= d.length; i++) {
                    console.log(d[i],"di")
                    switch (d[i] === values.name && d[i] !== undefined) {
                        case true:
                            console.log(d[i] === values.name)
                            console.log(values.name,"al")
                            alert("city already added")
                            break;
                        case false:
                            console.log(d[i] )
                            dispatch(getCityData(values.name, 'ADD'))
                            formik.resetForm()
                    }
                    /*if (d[i] === values.name) {
                        console.log(d[i])
                        alert("city already added")
                    } else {
                        console.log(d[i])
                        dispatch(getCityData(values.name, 'ADD'))
                        formik.resetForm()
                    }*/
                }
            }
        },
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    placeholder='Type here the city name' {...formik.getFieldProps('name')}
                    onChange={formik.handleChange} value={formik.values.name}
                />
                <Button type='submit'
                        variant='contained' color='primary'> Add City</Button>
            </form>
        </div>
    )
}