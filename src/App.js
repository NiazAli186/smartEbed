import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './Components/Layout/Footer/footer';
import {Box, ThemeProvider} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/login';
import {theme} from './Layout/Theme/theme';
import OptOrPassword from './Components/Login/opt-or-password';
import Header from './Components/Layout/Header/header';
import Property from './Components/Property/property';
import Flat from './Components/Property/Flat/Expect';
import Type from './Components/Property/Partition/type';
import Home from './Components/Home/home';
import Payment from './Components/Payment/payment';
import NewContract from './Components/Property/Flat/flat-modals/new-contract';
import {ModalProvider} from './Common/Modal/modal-provider';
import Profile from './Components/Profile/profile';
import Tenants from './Components/Tenants/tenants';
import {createContext} from 'react';

import PasswordSection from './Components/Login/password-section';
import Progress from './Common/progressLouding/progress';
import ProfileModal from './Components/Profile/profile-modal/profile-modal';
import Terms from './Components/Profile/terms/terms';
import AboutUs from './Components/Profile/about Us/aboutUs';
import SimpleBackdrop from './Common/contextProgress/backropProgress';
import UserBalance from './Components/Tenants/userBalance/userBalance';
import Acount from './Components/Layout/Header/acount';
import SaveInformationPerson from './Components/Home/SaveInformationPerson/SaveInformationPerson';
import axios from 'axios';
import Wallet from './Components/Layout/Header/acount';
import RegisterInformation from './Components/Property/registerInformation/registerInformation';
import Partition from './Components/Tenants/payFromWhatsapp/partition';
export const LoadingContext = createContext();

const App = (props) => {

    let progressBar = <Progress/>;
    const [loadingPgs, setLoadingPgs] = useState('');
    const [walletCredite , setWalletCredite]= useState('')
    const token = localStorage.getItem('access_token');

    const amountURL = "http://207.244.254.162:8012/api/v1/init?app_name=portal&app_version=v1.0&app_key=f82f73b9-6b7b-44ca-a96e-d9410b63d99e"

    useEffect(() => {
        // Function to fetch data (side effect)
        // Check if `amountURL` is defined
        if (amountURL) {
            axios.get(amountURL, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept-Language': 'en',
                },
            })
                .then((res) => {
                    let WalletAmount = res.data.results.portal.profile.accounts[1].credits[0].amount;
                    setWalletCredite(WalletAmount)
                    console.log(WalletAmount)// Assuming the response contains the desired data
                })
                .catch(err => console.log(err));
        } else {
            console.log("URL for amount is not defined.");
        }
    }, []);


return (

    <Box className="main">
        {loadingPgs}
        <ThemeProvider theme={theme()}>
            <ModalProvider>
                <LoadingContext.Provider value={{loadingPgs, setLoadingPgs, progressBar,walletCredite}}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/acout" element={<Wallet/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/login/passwordSection" element={<PasswordSection/>}/>
                        <Route path="/login2" element={<OptOrPassword/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/profile/profileModal" element={<ProfileModal/>}/>
                        <Route path="/profile/terms" element={<Terms/>}/>
                        <Route path="/profile/aboutUs" element={<AboutUs/>}/>
                        <Route path="/property" element={<Property/>}/>
                        <Route path="/property/savInformation" element={<SaveInformationPerson/>}/>
                        <Route path="/tenants" element={<Tenants/>}/>
                        <Route path="/property/flat" element={<Flat/>}/>
                        <Route path="/property/flat/userBalance" element={<UserBalance/>}/>
                        <Route path="/property/flat/partition" element={<Partition/>}/>
                        <Route path="/property/flat/registerInformation" element={<RegisterInformation/>}/>
                        <Route path="/property/flat/type" element={<Type/>}/>
                        <Route path="/property/flat/newContract" element={<NewContract/>}/>
                        <Route path="/payment" element={<Payment/>}/>
                    </Routes>
                    <Footer/>
                </LoadingContext.Provider>
            </ModalProvider>
        </ThemeProvider>
    </Box>
);
};

export default App;
