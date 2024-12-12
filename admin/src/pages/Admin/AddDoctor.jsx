import React, { useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets_admin/assets'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

        if (!docImg) {
          return toast.error('Image Not Selected!')
        }
  
        const formData = new FormData()
  
        formData.append('image', docImg)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('experience', experience)
        formData.append('fees', Number(fees))
        formData.append('about', about)
        formData.append('speciality', speciality)
        formData.append('degree', degree)
        formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
  
        formData.forEach((value, key) => {
          console.log(`${key} : ${value}`)
        })
  
        const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
  
        if (data.success) {
          toast.success(data.message)
          setDocImg(false)
          setName('')
          setEmail('')
          setPassword('')
          setAddress1('')
          setAddress2('')
          setDegree('')
          setAbout('')
          setFees('')
        } else {
          toast.error(data.message)
        }
  
      } catch (error) {
        toast.error(error.message)
        console.log(error)
      }
    }
}

export default AddDoctor