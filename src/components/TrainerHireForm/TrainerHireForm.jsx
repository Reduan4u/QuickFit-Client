"use client"


import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import LoginButton from '../Common/LoginButton';

const TrainerHireForm = ({ params }) => {


  const axiosPublic = useAxiosPublic();
  const [selectedDays, setSelectedDays] = useState('7day');
  const [experts, setExperts] = useState([])



  const expert = experts?.find(item => item._id == params.id)


  useEffect(() => {

    axiosPublic.get("/experts") // Make a GET request to "/experts"
      .then(response => {
        setExperts(response.data)
      })
      .catch(error => {
        console.error('Error:', error); // Log any errors that occur during the request
      });


  }, []);


  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const experience = form.experience.value;
    const specialization = form.specialization.value;
    const days = form.days.value;
    const price = form.price.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const product = { name, email, experience, price, days, specialization, userName, userEmail }; // Include id in the product object
    console.log(product);
    axiosPublic.post("/trainer", product)
      .then(result => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Trainer Request Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const calculateDefaultPrice = (days) => {
    switch (days) {
      case '7day':
        return '$30';
      case '15day':
        return '$50';
      case '30day':
        return '$100';
      case '50day':
        return '$140';
      case '90day':
        return '$200';
      default:
        return '';
    }
  };

  return (
    <div className="my-20  ">
      <h1 className="text-center text-5xl  font-bold underline"> Hire Form </h1>
      <form onSubmit={handleAddProduct}>
        <div className="card-body grid md:grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Trainer Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
              readOnly
              defaultValue={expert?.name}

            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Trainer Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered"
              required
              readOnly
              defaultValue={expert?.email}

            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Experience</span>
            </label>
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              className="input input-bordered"
              defaultValue="4 years"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Specialization</span>
            </label>
            <select name="specialization" className="select select-bordered">

              <option value="health">Nutrition</option>
              <option value="fitness">Fitness</option>
              <option value="balance">Balance</option>
              <option value="female">Female</option>
              <option value="cardio">Cardio</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Days</span>
            </label>
            <select
              name="days"
              onChange={(e) => setSelectedDays(e.target.value)}
              className="select select-bordered"
              defaultValue="7day"
            >
              <option value="7day">7 days</option>
              <option value="15day">15 days</option>
              <option value="30day">30 days</option>
              <option value="50day">50 days</option>
              <option value="90day">90 days</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              value={calculateDefaultPrice(selectedDays)}
              required
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              className="input input-bordered"
              required

            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="Enter Email"
              className="input input-bordered"
              required

            />
          </div>
        </div>
        <LoginButton>Hire Request</LoginButton>
      </form>
    </div>
  );
};

export default TrainerHireForm;

