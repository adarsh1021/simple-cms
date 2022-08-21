# Simple CMS

Simple CMS is the simplest realtime CMS, built with the awesome Supabase as part of the [Launch Week 5 Hackathon](https://www.madewithsupabase.com/launch-week-5)!  
Check it out at - https://simple-cms.vercel.app/

## Demo

https://user-images.githubusercontent.com/22254286/185808311-d0b4e645-b6f2-45a1-acfc-b5f2fd5668d0.mp4

In this demo, we see an example of a real time news website. The new items being added and it appears on the example page in real time. See the example here [https://simple-cms.vercel.app/example/realtime-news](https://simple-cms.vercel.app/example/realtime-news)

## About

Current CMS systems out there are either built for blogs or have a complex system for building and manipulating with strucutred data. Simple CMS was built with the following goals in mind:

- Simplicity - data is stored as key value pairs in JSON.
- Easy to manage small and large amounts of data.
- Can handle multiple data formats - text, numbers, rich text, HTML, markdown. Since everything is stored in JSON, any format that can be serialized into a JSON can be supported.
- Realtime capabilities - any modifications to data are propagated immediately to all subscribers using Supabase realtime.

Some use cases I can think of for simple use cases are blogs, copy on websites, message / job boards, news feeds that update in realtime, handling live scores for sports or other events or any real time system that reuqires information to be broadcasted.

## How Supabase is Used

- Supabase Auth for authentication.
- Store the data and relationship between projects, collections and items in PostgreSQL tables.
- Supabase realtime to broadcast changes to items.
- [WIP feature] Supabase storage for handling media uploads. (not sure if this will be done before the hackathon ends)

## Usage

The first step is to create project. A project is the top level in the logical information heierarchy. Examples - My Blog, Supabase Launch Week Updates, Jobs at Supabase, High School Football Tournament etc..

Projects have collections in them. A collection is a way to categorize related information. For example, in case of a blog, a collection can be all posts related to photography. For a daily news website, a collection can correspond to each day. For a job board, "Jobs in Software Engineering" can be a collection.

Collections are made up of items. Item is the actual content that needs to be published and updated in real time. In case of a blog, each item can be a post. For a daily news website, each item can be a news. For a job board, each item can correspond to a job listing.

![Hierarchy of information](/demo/hierarchy.png)

## Team

I am the only person on the team. You can find me on twitter [@adarsh-menon](https://twitter.com/adarsh_menon_).
