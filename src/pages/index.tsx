
// Placeholder pages to satisfy imports

const Placeholder = ({ name }: { name: string }) => (
    <div style={{ padding: '2rem' }}>
        <h1>{name} </h1>
        < p > This page is under construction.</p>
    </div>
);

export { HomePage } from './Home';
export { BrowsePage } from './Browse';
export { ItemDetailPage } from './ItemDetail';
export { LoginPage } from './Login';
export { RegisterPage } from './Register';
export { MyBookingsPage } from './MyBookings';
export { OwnerBookingsPage } from './OwnerBookings';
export { OwnerItemsPage } from './OwnerItems';
export { CreateItemPage } from './CreateItem';
export { NotificationsPage } from './Notifications';
export { BookingDetailPage } from './BookingDetail';
export { PaymentCallbackPage } from './PaymentCallback';
export { ProfilePage } from './Profile';
export { EditItemPage } from './EditItem';
