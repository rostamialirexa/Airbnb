import getCurrentUser from '@/actions/getCurrentUser';
import getListingById from '@/actions/getListingById'
import getReservations from '@/actions/getReservation';
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import ListingClient from '@/components/Listings/ListingClient';
import React from 'react'




interface IParams {
            listingId?: string;
}

const ListingPage = async ({params} : {params: IParams}) => {
            const listing = await getListingById(params);
            const reservations = await getReservations(params);
            const currentUser = await getCurrentUser();

            if(!listing) {
                        return (
                                    <ClientOnly>
                                                <EmptyState/>
                                    </ClientOnly>
                        )
            }
  return (
            <ClientOnly>
                        <ListingClient
                                    listing={listing}
                                    reservations={reservations}
                                    currentUser={currentUser}
                        />
            </ClientOnly>
  )
}

export default ListingPage