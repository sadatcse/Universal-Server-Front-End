import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { CgSpaceBetween } from "react-icons/cg";

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    fontSize: "5px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: { width: "100%", border: "1 solid black", marginBottom: 10 },
  tableRow: {
    flexDirection: "row",
    border: "1 solid black",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  tableCell: { padding: 3 },
  headerCell: { fontWeight: "bold" },
});

function ExportDataToPDF({ tableData, children }) {
  return (
    <PDFDownloadLink
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Customer Satisfaction Survey</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    Question
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    Answer
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>ID</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    First Name
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    List Name
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    Email
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    Gender
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    Country
                  </Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>
                    Date
                  </Text>
                </View>
                {tableData &&
                  tableData.map((row, index) => (
                    <View key={index} style={styles.tableRow}>
                      <Text style={styles.tableCell}>{row.question}</Text>
                      <Text style={styles.tableCell}>{row.answer}</Text>
                      <Text style={styles.tableCell}>{row._id}</Text>
                      <Text style={styles.tableCell}>{row.first_name}</Text>
                      <Text style={styles.tableCell}>{row.list_name}</Text>
                      <Text style={styles.tableCell}>{row.email}</Text>
                      <Text style={styles.tableCell}>{row.gender}</Text>
                      <Text style={styles.tableCell}>{row.country}</Text>
                      <Text style={styles.tableCell}>{row.date}</Text>
                    </View>
                  ))}
              </View>
            </View>
          </Page>
        </Document>
      }
      fileName="Customer-Satisfaction-Survey.pdf"
    >
      {({ blob, url, loading, error }) => (loading ? "" : children)}
    </PDFDownloadLink>
  );
}

export default ExportDataToPDF;
