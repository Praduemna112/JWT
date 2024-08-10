import React, { useEffect, useState } from 'react';
import { getAllSubscriptions } from '../../services/subscriptionService';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SubscriptionList = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const data = await getAllSubscriptions();
                setSubscriptions(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching subscriptions:', error);
                setError('Failed to fetch subscriptions.');
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    if (loading) return <div className="alert alert-info">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    if (subscriptions.length === 0) {
        return <div className="alert alert-warning">No subscriptions found</div>;
    }

    return (
        <div className="table-container">
            <h2 className="table-heading">Subscription List</h2>
            <button className="btn btn-primary mb-3" onClick={() => navigate('/')}>Back to Home</button><br></br>
            <Link to="/subscriptions/create" className="btn btn-primary mb-3">Create New Subscription</Link>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((subscription) => (
                        <tr key={subscription.subscriptionId}>
                            <td>{subscription.subscriptionId}</td>
                            <td>{subscription.subscriptionStartDate}</td>
                            <td>{subscription.subscriptionEndDate}</td>
                            <td>{subscription.subscriptionType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubscriptionList;
