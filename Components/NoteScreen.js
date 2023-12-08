import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addWord } from '../ReduxToolkit/reducers/nodeSlice';

export default function NoteScreen({ navigation, route }) {
    const userId = route.params;

    var [data, setData] = useState([])

    var [showAdd, setShowAdd] = useState(false);

    var [showEdit, setShowEdit] = useState(false);

    const dispatch = useDispatch();

    const note = useSelector((state) => state.note);

    const [englishWord, setEnglishWord] = useState('');
    const [vietnameseWord, setVietnameseWord] = useState('');


    useEffect(() => {
        getAPIUser()
    }, []);

    useEffect(() => {
        setData(data)

    }, [data]);

    const getAPIUser = async () => {
        const url = "http://localhost:3000/users?id=" + userId.userId;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                json.map(element => {
                    setData(json)
                    dispatch(addUser({
                        id: element.id,
                        username: element.username,
                        password: element.password,
                        english: element.english,
                        vietnamese: element.vietnamese
                    }));
                })
            });

    }

    const handleAddWord = () => {
        // Clear input fields
        setEnglishWord('');
        setVietnameseWord('');

        // Dispatch the addWord action with the new word
        dispatch(addWord({
            titleEng: englishWord,
            titleVie: vietnameseWord
        }));

    };



    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={{ fontSize: 25, fontWeight: 500, color: '#8353E2' }}>HELLO, {note.username}!
                </Text>
            </View>

            <View style={styles.mid}>

                <Text>Your Vocabulary:</Text>
                {note.english.map((word, index) => (
                    <View key={index}>
                        <Text>{word.titleEng}</Text>
                    </View>
                ))}
                {note.vietnamese.map((word, index) => (
                    <View key={index}>
                        <Text>{word.titleVie}</Text>
                    </View>
                ))}


            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnAddNote}
                    onPress={() => {
                        // navigation.navigate('AddNoteScreen', { userId: userId.userId })
                        setShowAdd(true);

                    }}
                >
                    <Text style={{ fontSize: 25, fontWeight: 500, color: '#FFFFFF' }}>ADD NOTE</Text>
                </TouchableOpacity>
            </View>


            <Modal visible={showAdd} transparent={true}>
                <View style={{ width: '80%', height: 320, justifyContent: 'center', alignItems: 'center', marginTop: 200, marginLeft: 40, border: '1px solid #C4C4C4', backgroundColor: 'white' }}>
                    <View style={{ width: '100%', height: 50, paddingTop: '20px' }}>
                        <Text style={{ fontSize: 25, fontWeight: 500, color: '#8353E2', left: 30 }}>Add Note</Text>
                    </View>

                    <View style={{ width: '100%', height: 'auto', marginTop: 20 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Content"
                            value={englishWord}
                            onChangeText={(text) => setEnglishWord(text)}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Trans"
                            value={vietnameseWord}
                            onChangeText={(text) => setVietnameseWord(text)}
                        />

                    </View>

                    <View style={{ width: '100%', height: 50, marginTop: '30px', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btnRegister} onPress={handleAddWord}>
                            <Text style={{ fontSize: 25, fontWeight: 500, color: '#FFFFFF' }}>Send</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRegister} onPress={() => {
                            setShowAdd(false);
                        }}>
                            <Text style={{ fontSize: 25, fontWeight: 500, color: '#FFFFFF' }}>Close</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>


            <Modal visible={showEdit} transparent={true}>
                <View style={{ width: '80%', height: 220, justifyContent: 'center', alignItems: 'center', marginTop: 200, marginLeft: 40, border: '1px solid #C4C4C4', backgroundColor: 'white' }}>
                    <View style={{ width: '100%', height: 50, paddingTop: '20px' }}>
                        <Text style={{ fontSize: 25, fontWeight: 500, color: '#8353E2', left: 30 }}>Edit Note</Text>
                    </View>

                    <View style={{ width: '100%', height: 100, marginTop: 20 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Input edit note"
                            value={''}
                        />

                    </View>

                    <View style={{ width: '100%', height: 50, marginTop: '-30px', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btnRegister}>
                            <Text style={{ fontSize: 25, fontWeight: 500, color: '#FFFFFF' }}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRegister} onPress={() => {
                            setShowEdit(false);
                        }}>
                            <Text style={{ fontSize: 25, fontWeight: 500, color: '#FFFFFF' }}>Close</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>


        </View>
    );

};




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    head: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10
    },

    mid: {
        width: '100%',
        height: 'auto',
        paddingBottom: 80
    },

    footer: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
    },

    input: {
        width: '90%',
        height: 50,
        paddingLeft: 20,
        fontSize: 20,
        borderRadius: 10,
        border: '1px #9095A0 solid',
        marginLeft: 20,
        margin: 10,

    },

    btnRegister: {
        width: '40%',
        height: 50,
        backgroundColor: '#8353E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        left: 20,
        marginLeft: 10
    },

    btnAddNote: {
        width: '80%',
        height: 50,
        backgroundColor: '#8353E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '30px'
    },

    btnEdit: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    listNote: {
        width: '100%',
        height: 80,
        border: '1px solid #C4C4C4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20

    }
});
