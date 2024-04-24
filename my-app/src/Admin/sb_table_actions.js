
import { createClient } from '@supabase/supabase-js'
import {uuid} from "@supabase/supabase-js/src/lib/helpers";
import {useEffect, useState} from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient('https://owbmgfexablklljwydlm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Ym1nZmV4YWJsa2xsand5ZGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MTQyOTQsImV4cCI6MjAyOTQ5MDI5NH0.iXttQ_vbqXIQd6SI7gaK7rty7kDDGM1Kvtxa5Ugq4QQ')

const [data, setData] = useState([]);

// fetch data
useEffect(() => {
    async function fetchData() {
        try {
            const {data, error} = await supabase.from('DrinkList').select('*')

            if (error) {
                console.log("Error fetching data: ", error)
                return [];
            } else {
                console.log("Data fetched successfully", data)
                setData(data);
            }
        } catch (error) {
            console.log("Error fetching data: ", error)
        }
    }

    fetchData();
}, []);


//insert a row
export const insertItem = async (dName, img, desc, cat, def, caff, dairy) => {
    try {
        const {data, error} = await supabase
            .from('DrinkList')
            .insert([
                {
                    id: uuid(),
                    drink: dName,
                    img: img,
                    description: desc,
                    category: cat,
                    defaultAtr: def,
                    caffeine: caff,
                    includesDairy: dairy
                },
            ])

        if (error) {
            console.error('Error inserting data:', error.message);
        } else {
            console.log('Data inserted successfully:', data);
            // Optionally, you can access the inserted data here
        }
    }
    catch
        (error)
        {
            console.error('Error inserting data:', error.message);
        }
}



// delete a row
export const deleteItem = async (id) => {
   try {
        const {data, error} = await supabase
            .from('DrinkList')
            .delete()
            .eq('id', id)

       if (error) {
           console.error('Error deleting data:', error.message);
       } else {
           console.log('Data deleted successfully:', data);
           // Optionally, you can access the inserted data here
           fetchData();
       }

    } catch (error) {
       console.error('Error deleting data:', error.message);
   }
}



// update a row
// You can update specific rows using horizontal filters, e.g. eq, lt, and is.
export const updateItem = async (id) => {
    try {
        const {data, error} = await supabase
            .from('DrinkList')
            .update({description: 'NEW description available'})
            .eq('id', id)

        if (error) {
            console.error('Error updating data:', error.message);
        } else {
            console.log('Data updated successfully:', data);
            // Optionally, you can access the inserted data here
        }

    } catch (error) {
        console.error('Error updating data:', error.message);
    }
}



// read all rows
async function getAllRows() {
    let { data: DrinkList, error } = await supabase
        .from('DrinkList')
        .select('*')
}

