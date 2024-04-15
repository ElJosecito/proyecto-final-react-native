import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

const ReportSituation = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);

    const handleChoosePhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Se requieren permisos para acceder a la galería');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
            setImage(`data:image/jpg;base64,${result.base64}`);
        }
    };

    const handleGetLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Se requieren permisos para acceder a la ubicación');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
    };

    const handleSubmit = () => {
        console.log('Reporte enviado');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reportar Situación</Text>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
                placeholderTextColor="#888"
            />
            <TextInput
                style={[styles.input, styles.descriptionInput]}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
                multiline
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
                <Text style={styles.buttonText}>Elegir foto</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <TouchableOpacity style={styles.button} onPress={handleGetLocation}>
                <Text style={styles.buttonText}>Obtener ubicación</Text>
            </TouchableOpacity>
            {location && (
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>Latitud: {location.latitude}</Text>
                    <Text style={styles.locationText}>Longitud: {location.longitude}</Text>
                </View>
            )}
            <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        padding: 12,
        alignItems: 'center',
        marginBottom: 15,
    },
    submitButton: {
        backgroundColor: '#28a745',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 15,
    },
    locationContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    locationText: {
        fontSize: 16,
        color: '#333',
    },
});

export default ReportSituation;