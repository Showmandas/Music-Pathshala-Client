import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';

const useSelectItem=()=>{
    const {user}=useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    const token=localStorage.getItem('access-token')
    const { refetch, data: seatData=[] } = useQuery({
        queryKey: ['seats',user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const response=await fetch(`https://music-school-server-nine.vercel.app/seats?email=${user?.email}`,{headers : {authorization : `Bearer ${token}`}})
            return response.json();
        },

      })
      return [seatData,refetch]

}

export default useSelectItem;