"use client"
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});



const CertificateDocument = ({ course, user }) => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Certificate of Completion</Text>
        <Text style={styles.subtitle}>This certificate is awarded to:</Text>
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
        <Text style={styles.subtitle}>For completing the course:</Text>
        <Text>{course?.title}</Text>
      </View>
    </Page>
  </Document>
  );
export default CertificateDocument