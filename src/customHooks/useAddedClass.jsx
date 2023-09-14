import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAddedClass = () => {
    const {user}=useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    const token=localStorage.getItem('access-token')
    const { refetch, data: myAddClass=[] } = useQuery({
        queryKey: ['myaddclass',user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const response=await fetch(`https://music-school-server-nine.vercel.app/myaddclass?email=${user?.email}`,{headers : {authorization : `Bearer ${token}`}})
            return response.json();
        },

      })
      return [myAddClass,refetch]
};

export default useAddedClass;