﻿using AutoMapper;
using Shop.Api.Models;
using Shop.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Api.Mappings
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.CreateMap<Post, PostViewModel>().ReverseMap();
            Mapper.CreateMap<Brand, BrandViewModel>().ReverseMap();
            Mapper.CreateMap<Footer, FooterViewModel>().ReverseMap();
            Mapper.CreateMap<Page, PageViewModel>().ReverseMap();
            Mapper.CreateMap<PostCategory, PostCategoryViewModel>().ReverseMap();
            Mapper.CreateMap<PostTag, PostTagViewModel>().ReverseMap();
            Mapper.CreateMap<Product, ProductViewModel>().ReverseMap();
            Mapper.CreateMap<ProductCategory, ProductCategoryViewModel>().ReverseMap();
            Mapper.CreateMap<Slide, SlideViewModel>().ReverseMap();
            Mapper.CreateMap<Tag, TagViewModel>().ReverseMap();
        }
    }
}