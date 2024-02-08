import { Document, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  table: { width: '100%', border: '1 solid black', marginBottom: 10 },
  tableRow: { flexDirection: 'row', border: '1 solid black', alignItems: 'center' },
  tableCell: { padding: 5 },
  headerCell: { fontWeight: 'bold' }
});



function ExportDataToPDF({tableData ,children}) {
  return (
    <PDFDownloadLink document={<Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Customer Satisfaction Survey</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.headerCell]}>ID</Text>
              <Text style={[styles.tableCell, styles.headerCell]}>Name</Text>
              <Text style={[styles.tableCell, styles.headerCell]}>Date</Text>
              <Text style={[styles.tableCell, styles.headerCell]}>Email</Text>
            </View>
            {tableData && tableData.map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{row.id}</Text>
                <Text style={styles.tableCell}>{row.name}</Text>
                <Text style={styles.tableCell}>{row.date}</Text>
                <Text style={styles.tableCell}>{row.email}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>} fileName="Customer-Satisfaction-Survey.pdf">
      {({ blob, url, loading, error }) => (loading ? '' : children)}
    </PDFDownloadLink>
  );
}

export default ExportDataToPDF;
