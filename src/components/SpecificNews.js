import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const SpecificNews = ({ isAuthenticated }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://adamix.net/defensa_civil/noticias');
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const renderNewsItem = ({ item }) => (
        <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Noticias Específicas</Text>
            {isAuthenticated ? (
                <FlatList
                    data={news}
                    renderItem={renderNewsItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.authMessage}>
                    Debes estar autenticado para ver las noticias específicas.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    newsItem: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    newsDescription: {
        fontSize: 16,
        color: '#666',
    },
    authMessage: {
        fontSize: 16,
        color: '#ff0000',
        textAlign: 'center',
    },
});

export default SpecificNews;