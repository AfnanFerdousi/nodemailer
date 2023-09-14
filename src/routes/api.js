
const express=require('express');
const BrandController = require("../controller/BrandController");
const CategoryController = require('../controller/CategoryController');
const ProductController = require('../controller/ProductController');
const UserController = require('../controller/UserController');
const ProfileController = require('../controller/ProfileController');
const InvoiceController = require('../controller/InvoiceController');
const AuthVerification = require('../middelware/AuthVerification');

const router=express.Router();

//Brand Category
router.get('/BrandList', BrandController.BrandList)
router.get('/CategoryList',CategoryController.CategoryList)

//product
router.get('/SliderList', ProductController.SliderList)
router.get('/ListByCategory', ProductController.ListByCategory)
router.get('/ListBySmilier', ProductController.ListBySmilier)
router.get('/ListByBrand', ProductController.ListByBrand)
router.get('/ListByKeyword', ProductController.ListByKeyword)
router.get('/ListReview', ProductController.ListReview)
router.get('/ProductDetails', ProductController.ProductDetails)
router.get('/ListByRemark', ProductController.ListByRemark)
router.get('/WishList', ProductController.WishList)
router.get('/CreateWishList', ProductController.CreateWishList)
router.get('/RemoveWishList', ProductController.RemoveWishList)
router.get('/CartList', ProductController.CartList)
router.get('/CreateCartList', ProductController.CreateCartList)
router.get('/RemoveCartList', ProductController.RemoveCartList)


//user

router.get('/UserLogin/:email', UserController.UserLogin)
router.get('/VerifyLogin', UserController.VerifyLogin)
router.get('/UserLogout', UserController.UserLogout)

//Profile
router.get('/CreateProfile',AuthVerification, ProfileController.CreateProfile)
router.get('/ReadProfile', AuthVerification, ProfileController.ReadProfile)
router.get('/UpdateProfile',AuthVerification, ProfileController.UpdateProfile)

//Invoice 

router.get('/InvoiceCreate',AuthVerification,InvoiceController.InvoiceCreate )
router.get('/InvoiceList',AuthVerification, InvoiceController.InvoiceList )
router.get('/InvoiceProductList',AuthVerification, InvoiceController.InvoiceProductList )
router.get('/PaymentSuccess',InvoiceController.PaymentSuccess )
router.get('/PaymentFail',InvoiceController.PaymentFail )
router.get('/PaymentCancel',InvoiceController.PaymentCancel)
router.get('/PaymentIPN',InvoiceController.PaymentIPN)


module.exports=router;